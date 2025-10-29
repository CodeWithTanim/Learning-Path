# Modules & Pip
## Modules
Modules is like a code library whcih can be used to borrow code written by someone else in our python program.

Modules have 2 types:
- Built-in-Modules: This modules are already installed with Python. We don't need to install these manually.
- External-Modules: These modules are importad from a 3rd party file or can be installed using a package manager **pip** or **conda**. These module also have different versions so we can download or install as per our need.

## pip
[Pip](https://pip.pypa.io/en/stable/) is used as a package manager to install Python modules.

e.g. If we need to install **pandas** which is an external module we have to use the pip command like this:
```
pip install pandas
```

## Use Modules in Python:
Generally we use the build-in or external modules by using the import syntax in Python.

e.g:
```
import pandas

# here is code
df = pandas.read_csv('words.csv')
print(df)

```

Similarly use can install other modules and read the documentations for usage instructions.