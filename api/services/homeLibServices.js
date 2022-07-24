const mysqlConnection = {
    host: 'localhost',
    user: 'root',
    port: 3307,
    password: 'Greencrab1!',
    database: 'homelibrary',
    dateStrings: true
  };

  const addCommas=function (nStr){
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
     x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
   }
   
const removeComma=function(nstr){
 nstr=nstr.replace(/\,/g,'');
 return nstr;
}    

module.exports = {
    getUserInfo() {
      console.info('Calling Service now');
      //req.get('periodEnd')
      return new Promise((resolve, reject) => {
          try {
          const mysqlQuery = "SELECT firstName,lastName FROM homelibrary.users";
      
        console.log(mysqlQuery);
          MysqlService.query(mysqlConnection, mysqlQuery, {})
                          .then(sqlData => {
                //  sqlData=appendDataTypeForQTD(sqlData);
                              //console.info({sqlData});
                              resolve(sqlData);
                          }).catch(error => {
                              reject(error);
                          });
  
          }catch(exception) {
              reject(exception.message);
          }
          
    });
  }}