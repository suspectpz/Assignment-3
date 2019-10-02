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
      {
        name: 'accounting receivable',
        children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
      },
    ],
  },
  {
    name: 'finance',
    children: [{ name: 'investment', children: [] }],
  },
]


const start_tag = '<ul>'
const end_tag = '</ul>'
const start_li = '<li>'
const end_li = '</li>'

function printDepts(depts) {
	var output = start_tag
	for (let a = 0, b = depts.length; a < b; a++) {
		var objNF = JSON.stringify(depts[a].name);
  	var objF = objNF.replace(/\"/g, "")
  	output += start_li + objF;
  
  	//for(let c = 0, d = org1_depts.) // stuck here ? how would I address the nested values
  	//                                // such as org1_depts.name.children[a] for example?
	}

output += end_li
output += end_tag

return output;
}

outOrg1 = printDepts(org1_depts);
outOrg2 = printDepts(org2_depts);

const outputDiv1 = document.getElementById('org1')
outputDiv1.innerHTML = outOrg1
const outputDiv2 = document.getElementById('org2')
outputDiv2.innerHTML = outOrg2