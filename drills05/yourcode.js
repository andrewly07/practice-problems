function populateRecords(chargesArr){
    var totalCharges = {
      "charge": 0,
      "cash advance": 0
    }
    var charges = 0;
    var cashAdvances = 0;
    for (var i = 0; i < chargesArr.length; i++){
      if (chargesArr[i].type === 'charge'){
        charges += Number(chargesArr[i].amount);
      } else {
        cashAdvances += Number(chargesArr[i].amount);
      }
    }
    totalCharges["charge"] = charges;
    totalCharges["cash advance"] = cashAdvances;
    return totalCharges;
  }

  ///////////////////////////////////////////////
  ////////////version table//////////////////////
  ///////////////////////////////////////////////


  // function makeTable(objList) {
  //   const tableElement = $('<table>');
  //   const rowElement = $('<tr>');
 
  //   const typeHeaderEle = $('<th>', {
  //       text: 'TYPE',
  //       class: 'transactionType'
  //   });
  //   const sourceHeaderEle = $('<th>', {
  //       text: 'SOURCE',
  //       class: 'transactionLocation'
 
  //   });
  //   const amountHeaderEle = $('<th>', {
  //       text: 'AMOUNT',
  //       class: 'transactionAmount'
  //   });
  //   rowElement.append([typeHeaderEle, sourceHeaderEle, amountHeaderEle]);
 
  //   tableElement.append(rowElement);
 
 
  //   for (var obj of objList) {
  //       const typeEle = $('<td>', {
  //           text: obj.type,
  //           class: 'transactionType'
  //       });
  //       const sourceEle = $('<td>', {
  //           text: obj.source,
  //           class: 'transactionLocation'
  //       });
  //       const amountEle = $('<td>', {
  //           text: obj.amount,
  //           class: 'transactionAmount'
  //       });
  //       const rowElement = $('<tr>');
  //       rowElement.append([typeEle, sourceEle, amountEle]);
  //       tableElement.append(rowElement);
  //   }
  //   $('#testArea').append(tableElement);
 
  //   $('#testArea *').addClass('testOutput');
  //   $('tr').addClass('transactionRecord')
  //  }

/////////////////////////////////////////////////////
///////////////version1//////////////////////////////
/////////////////////////////////////////////////////

var monthlystatement = new Object();
function populateRecords(stuffbought){
   var totalcharge = 0;
   var totalcashadvance = 0;
   for (var i = 0; i < stuffbought.length; i++) {
       if (stuffbought[i].type === "charge") {
           totalcharge = totalcharge + parseFloat(stuffbought[i].amount);
       } else if (stuffbought[i].type === "cash advance") {
           totalcashadvance = totalcashadvance + parseFloat(stuffbought[i].amount);
       }
   }
   monthlystatement["charge"] = totalcharge;
   monthlystatement["cash advance"] = totalcashadvance;
   $("#testArea").append("<div class='testOutput'>");
   $(".testOutput").append("<div class='transactionRecord'><div class='transactionType'>Type</div><div class='transactionLocation'>Source</div><div class='transactionAmount'>Amount</div></div>")
   for (var i = 0; i < stuffbought.length; i++) {
       var transRecord = $("<div>").addClass("transactionRecord");
       $('.testOutput').append(transRecord);

       if (stuffbought[i].type !== "") {
           $(transRecord).append("<div class='transactionType'>" + stuffbought[i].type + "</div>");
       }
       if (stuffbought[i].source !== "") {
           $(transRecord).append("<div class='transactionLocation'>" + stuffbought[i].source + "</div>");
       }
       if (stuffbought[i].amount !== "") {
           $(transRecord).append("<div class='transactionAmount'>" + stuffbought[i].amount + "</div>");
       }
   }
   $("#testArea").append("</div></div>");
   return monthlystatement;
   <div class="transactionType">stuffbought[i].type</div>