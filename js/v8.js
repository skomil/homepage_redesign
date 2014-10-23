
/*



Copyright 2014 Mayday PAC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

function addCommas(nStr) {
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

function updateTotals() {
  jQuery.getJSON('https://pledge.mayday.us/r/total', function(data) {
    totalRaised = data.totalCents/100 + (1408240.42+1775000);//+offline contributions
    totalRaised = Math.round(totalRaised);
    $('#totalAmount').text('$' + addCommas(totalRaised));
  });

  jQuery.getJSON('https://pledge.mayday.us/r/num_pledges',
    function(data) {
    $('#numPledges').text(addCommas(data.count+4917+6));//+offline contributions
  });
}