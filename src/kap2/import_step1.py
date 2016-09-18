import pandas as pd

# http://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_csv.html
# df = pd.read_csv('../../datasets/Iris/iris_dirty.csv')
df = pd.read_csv('../../datasets/Iris/iris_dirty.csv',
                 header=None,
                 encoding='iso-8859-15',
                 names=['sepal length', 'sepal width', 'petal length', 'petal width', 'class'])
print(df)
