# README #

This extension provides useful functions encapsulated in a RunTimeObject called ogreUtils that can be used across multiple projects and languages. The idea is to make involved script code expressions easier to utilize in other test cases and Keyword Tests

## ABSTRACT ##

### Properties ###

#### Read-Only Constants ####
These properties are intended as constants to be used in conjunction with other functions to make the object more easily usable

* dateDDMMYYYY - Read Only - Constant date format DD/MM/YYYY - Value integer 0
* dateDDMMYY - Read Only - Constant date format DD/MM/YY - Value integer 1
* dateMMDDYYYY - Read Only - Constant date format MM/DD/YYYY - Value integer 2
* dateMMDDYY - Read Only - Constant date format MM/DD/YY - Value integer 3
* dateDDMMMYYYY - Read Only - Constant date format DD/JAN/YYYY - Value integer 4
* dateDDMMMYY - Read Only - Constant date format DD/JAN/YY - Value integer 5
* dateMMMDDYYYY - Read Only - Constant date format JAN/DD/YYYY - Value integer 6
* dateMMMDDYY - Read Only - Constant date format JAN/DD/YY - Value integer 7

### Methods ###

* formatDate - Returns a string corresponding to the current date plus or minus an indicated number of days. Two parameters: first parameter is the format to be used. It's an integer value but the constants on the object can be used instead. The second parameter is an integer number of days. It can be positive or negative depending upon whether or not the date required is in the future or the past. This second parameter defaults to zero

#### Example ####

The following example demonstrates using this extension in a project:

```

function logTomorrowDate() {
    Log.Message(ogreUtils.formatDate(ogreUtils.dateMMDDYYYY, 1);
}

```
* getTCCommandLineParam - Returns the value of a given TestComplete/TestExecute commandline parameter

