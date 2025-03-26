from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from sklearn.tree import DecisionTreeRegressor
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend to call this API

# Load and preprocess the training dataset
df_train = pd.read_csv("train.csv")
df_train["date"] = pd.to_datetime(df_train["date"])
df_train["year"] = df_train["date"].dt.year
df_train["month"] = df_train["date"].dt.month
df_train["day"] = df_train["date"].dt.day
df_train["day_of_week"] = df_train["date"].dt.weekday
df_train = df_train.drop(columns=["date"])

X_train = df_train.drop(columns=["sales"])
y_train = df_train["sales"]

# Train Decision Tree Model
model = DecisionTreeRegressor(max_depth=5, random_state=42)
model.fit(X_train, y_train)

@app.route('/predict', methods=['POST'])
def predict():
    # Receive test data from the frontend
    test_data = request.json
    df_test = pd.DataFrame(test_data)
    
    # Convert 'date' to datetime features
    df_test["date"] = pd.to_datetime(df_test["date"])
    df_test["year"] = df_test["date"].dt.year
    df_test["month"] = df_test["date"].dt.month
    df_test["day"] = df_test["date"].dt.day
    df_test["day_of_week"] = df_test["date"].dt.weekday
    df_test = df_test.drop(columns=["date"])

    # Predict sales
    predictions = model.predict(df_test)
    df_test["Predicted Sales"] = predictions

    # Decide whether to place an order
    order_needed = ["Yes" if x > 10 else "No" for x in predictions]  # Example threshold
    df_test["Place Order"] = order_needed

    return jsonify(df_test.to_dict(orient="records"))

if __name__ == '__main__':
    app.run(debug=True)