# ml-examples
Machine Learning Examples

## Sample data sets
- Pre-processing: http://archive.ics.uci.edu/ml/datasets/Adult
- Supervised Learning: http://archive.ics.uci.edu/ml/datasets/Iris
- Regression: https://archive.ics.uci.edu/ml/datasets/Housing

## Preprocessing
* missing values, line 83, second field just not there
* invalid value, line 58, third field is 'n/a'
* mismatching units, convert fourth field (petal width) into cm (from mm)
* outliers (bad data), line 144, missing decimal dot in first field (should have been 5.8, not 58)
* duplicates, line 51, 101
* spelling mistakes: line 50, Iris-setsoa