// in javascript equality(==) and comparision(<,>,>=,<=, etc) operators work differently
    // in comparision operators if you are checking with any datatype, the comparion operators converts that data type into the datatype from iwhich comparisionn is doing
    // like in null-
        // if you will compare with 0;
        console.log(null>=0) // this will return true, because in comparision with number null is treated as 0
        console.log(null>0)