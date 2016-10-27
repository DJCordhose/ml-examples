import pandas as pd

# http://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_csv.html
# df = pd.read_csv('../../datasets/Iris/iris_dirty.csv')
df = pd.read_csv('../../datasets/Iris/iris_dirty.csv',
                 header=None,
                 encoding='iso-8859-15',
                 names=['sepal length', 'sepal width', 'petal length', 'petal width', 'class'])
print(df)

# missing values, line 83, second field just not there
# invalid value, line 58, third field is 'n/a'
# mismatching units, line 2 convert fourth field (petal width) into cm (from mm)
# outliers (bad data), line 144, missing decimal dot in first field (should have been 5.8, not 58)
# duplicates, line 51, 101
# spelling mistakes: line 50, Iris-setsoa