onload = function () 
{
    // create a network
    var curr_data;
    var container = document.getElementById('mynetwork');
    var container2 = document.getElementById('mynetwork2');
    var genNew = document.getElementById('generate-graph');
    var solve = document.getElementById('solve');

    // initialise graph options
    var options = {
        edges: {
            arrows: 
            {
                to: true
            },
            labelHighlightBold: true,
            font: {
                size: 20
            },
            width: 1.3
        },
        nodes: {
            font: '12px arial red',
            scaling: {
                label: true
            },
            shape: 'icon',
            icon: 
            {
                face: 'FontAwesome',
                code: '\uf183',
                size: 50,  //50,
                color: '#991133',
            }
        }
    };

    // initialize network
    var network = new vis.Network(container);
    network.setOptions(options);

    function createData()
    {
        vertices = Math.floor(Math.random() * 8) + 2;
        nodes = [];
        for(i=1;i<=vertices;i++)
        {
            nodes.push({id:i, label:"Person "+i})
        }
        nodes = new vis.DataSet(nodes);

        edges = [];
        for(i=1;i<=vertices;i++)
        {
            for(j=i+1;j<=vertices;j++)
            {
                if(Math.random() > 0.5) //To make lesser no of edges n(n-1)/4 approx
                {
                    if(Math.random() > 0.5) // To make forward and backward edges
                        edges.push({from: i, to: j, label: String(Math.floor(Math.random()*100)+1)});
                    else
                        edges.push({from: j, to: i, label: String(Math.floor(Math.random()*100)+1)});
                }
            }
        }
        data = {
            nodes: nodes,
            edges: edges
        };
        curr_data = data;
    }

    genNew.onclick = function () {
        createData();
        network.setData(curr_data);
        temptext.style.display = "inline";
        container2.style.display = "none";
    };

    genNew.click();
};
