const org1_depts = [
	{
		name: 'accounting',
		children: [
			{ name: 'accounting payable', children: [] },
			{ name: 'accounting receivable', children: [] },
			],
	},
	{
		name: 'finance',
		children: [],
	},
]

const org2_depts = [
	{
		name: 'accounting',
		children: [
			{ name: 'accounting payable', children: [] },
			{ name: 'accounting receivable', children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],},
		],
	},
	{
		name: 'finance',
		children: [{ name: 'investment', children: [] }],
	},
]

function printDepts(depts, parent) {
	if (depts.length > 0) {
  		var ul = document.createElement('ul');
    	parent.appendChild(ul);
  	}
  
  	for (var i = 0; i < depts.length; i++) {
  		var li = document.createElement('li');
    	li.innerHTML = depts[i].name;
    	ul.appendChild(li);
    
    	if (depts[i].children) {
    		printDepts(depts[i].children, li);
   		}
  	}
}

const org1 = document.getElementById("org1");
const org2 = document.getElementById("org2");

printDepts(org1_depts, org1);
printDepts(org2_depts, org2);