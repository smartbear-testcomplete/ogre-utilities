//This code and the associated script extension are provided under a Creative Commons Attribution-ShareAlike 4.0 International License.
//You may use and modify this code according to the license, giving appropriate attribution and, if you distribute it, you must do so
//under the same license.
var dateDDMMYYYY = 0;
var dateDDMMYY = 1;
var dateMMDDYYYY = 2;
var dateMMDDYY = 3;
var dateDDMMMYYYY = 4;
var dateDDMMMYY = 5;
var dateMMMDDYYYY = 6;
var dateMMMDDYY = 7;

function getdateDDMMYYYY() {
    return dateDDMMYYYY;
}

function getdateDDMMYY() {
    return dateDDMMYY;
}

function getdateMMDDYYYY() {
    return dateMMDDYYYY;
}

function getdateMMDDYY() {
    return dateMMDDYY;
}

function getdateDDMMMYYYY() {
    return dateDDMMMYYYY;
}

function getdateDDMMMYY() {
    return dateDDMMMYY;
}

function getdateMMMDDYYYY() {
    return dateMMMDDYYYY;
}

function getdateMMMDDYY() {
    return dateMMMDDYY;
}

function formatDate(formatType, days) {
    try {
        if ((days == null) || (days == undefined)) {
            days = 0;
        }
        switch(formatType) {
            case dateDDMMYYYY:
                return aqConvert.DateTimeToFormatStr(aqDateTime.AddDays(aqDateTime.Today(), days), '%d/%m/%Y');
                break;
            case dateDDMMYY:
                return aqConvert.DateTimeToFormatStr(aqDateTime.AddDays(aqDateTime.Today(), days), '%d/%m/%y');
                break;
            case dateMMDDYYYY:
                return aqConvert.DateTimeToFormatStr(aqDateTime.AddDays(aqDateTime.Today(), days), '%m/%d/%Y');
                break;
            case dateMMDDYY:
                return aqConvert.DateTimeToFormatStr(aqDateTime.AddDays(aqDateTime.Today(), days), '%m/%d/%y');
                break;            
            case dateDDMMMYYYY:
                return aqConvert.DateTimeToFormatStr(aqDateTime.AddDays(aqDateTime.Today(), days), '%d/%b/%Y');
                break;            
            case dateDDMMMYY:
                return aqConvert.DateTimeToFormatStr(aqDateTime.AddDays(aqDateTime.Today(), days), '%d/%b/%y');
                break;            
            case dateMMMDDYYYY:
                return aqConvert.DateTimeToFormatStr(aqDateTime.AddDays(aqDateTime.Today(), days), '%b/%d/%Y');
                break;            
            case dateMMMDDYY:
                return aqConvert.DateTimeToFormatStr(aqDateTime.AddDays(aqDateTime.Today(), days), '%b/%d/%y');
                break;            
            default:
                throw Error('Unknown format type: ' + formatType);
        }
    }
    catch (exception) {
        Log.Error('Could not format date: ' + exception.description, exception.stack);
    }
}

function getCommandLineParameter(parameterString) {
    
    var string;
    var parameterListLength;
    var foundParameter;
    if (Sys.WaitProcess('TestExecute').Exists) {
        string = Sys.Process('TestExecute').CommandLine;
    }
    else {
        string = Sys.Process('TestComplete').CommandLine;
    }
    //Setting the list separator to grab a parameter     
    aqString.ListSeparator = '/';
    parameterListLength = aqString.GetListLength(string);
    for (var i = 1; i < parameterListLength; i ++) {
        if (aqString.Find(aqString.GetListItem(string, i), parameterString) != -1) {
            foundParameter = aqString.GetListItem(string, i);
            break;
        }    
    }
    if (foundParameter == undefined) {
        throw Error ('Unable to find parameter: ' + parameterString);
    }
    //Resetting list separator back to default
    aqString.ListSeparator = '|';
    return aqString.SubString(foundParameter, aqString.Find(foundParameter, '=') + 1, foundParameter.length);
}

function getUniqueID(digitLength) {
    var JJJHHMM = 7;
    var JJJYYHHMM = 9;
    var MMDDYYHHMM = 10;
    var MMDDYYYYHHMM = 12;
    var MMDDYYYYHHMMSS = 14;
    try {
        switch (digitLength) {
            case JJJHHMM: return aqConvert.DateTimeToFormatStr(aqDateTime.Now(), '%j%H%M');
                break;
            case JJJYYHHMM: return aqConvert.DateTimeToFormatStr(aqDateTime.Now(), '%j%y%H%M');
                break;
            case MMDDYYHHMM: return aqConvert.DateTimeToFormatStr(aqDateTime.Now(), '%m%d%y%H%M');
                break;
            case MMDDYYYYHHMM: return aqConvert.DateTimeToFormatStr(aqDateTime.Now(), '%m%d%Y%H%M');
                break;
            case MMDDYYYYHHMMSS: return aqConvert.DateTimeToFormatStr(aqDateTime.Now(), '%m%d%Y%H%M%S');
                break;
            default: throw Error('An unknown digitLength was used.  Please use a value of 7, 9, 10, 12, or 14');
        } 
    } 
    catch (exception) {
        Log.Error(exception.message, exception.stack);
        return 'error';
    } 
    
}
