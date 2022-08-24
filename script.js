var nColonne = 7;
var nRighe = 6;
var statoColonne = [5,5,5,5,5,5,5];

var griglia = document.getElementById("griglia");
var matrice;

var rosso = "rosso";
var giallo = "giallo";
var giocatoreAttuale = rosso;

var gameOver = false

window.onload = function()
{
    InizioPartita();
};

function InizioPartita(){
    matrice=[];
    for(i=0;i<nRighe;i++)
    {
        var riga = [];
        for(j=0;j<nColonne;j++)
        {
            riga.push(" ");
            var casella = document.createElement("div");
            casella.id = i.toString() + "-" + j.toString();
            casella.classList.add("casella");
            casella.addEventListener("click", Click);
            document.getElementById("griglia").append(casella);
        }
        matrice.push(riga)
    }
}

function Click()
{
    var coordinate = this.id.split("-");
    var r = parseInt(coordinate[0]);
    var c = parseInt(coordinate[1]);

    r = statoColonne[c];

    if(matrice[r][c]==" " && !gameOver)
    {
        matrice[r][c]=giocatoreAttuale;

        var casella = document.getElementById(r+"-"+c);

        if(giocatoreAttuale==rosso)
        {
            casella.classList.add("rosso");
            giocatoreAttuale=giallo;
        }
        else
        {
            casella.classList.add("giallo");
            giocatoreAttuale=rosso;
        }
        statoColonne[c]=statoColonne[c]-1;
        ControlloVittoria();
    }
}

function ControlloVittoria()
{
    //o
    for(i=0;i<nRighe;i++)
    {
        for(j=0;j<nColonne-3;j++)
        {
            if(matrice[i][j]!=' ')
            {
                if(matrice[i][j]== matrice[i][j+1] && matrice[i][j+1]== matrice[i][j+2] && matrice[i][j+2]== matrice[i][j+3])
                {
                    gameOver = 1;
                    document.getElementById("vincitore").innerText = " vince il " + matrice[i][j];
                }
            }
        }
    }

    //v
    for(i=0;i<nRighe-3;i++)
    {
        for(j=0;j<nColonne;j++)
        {
            if(matrice[i][j]!=' ')
            {
                if(matrice[i][j]== matrice[i+1][j] && matrice[i+1][j]== matrice[i+2][j] && matrice[i+2][j]== matrice[i+3][j])
                {
                    gameOver = 1;
                    document.getElementById("vincitore").innerText = " vince il " + matrice[i][j];
                }
            }
        }
    }

    //d1
    for(i=0;i<nRighe-3;i++)
    {
        for(j=0;j<nColonne-3;j++)
        {
            if(matrice[i][j]!=' ')
            {
                if(matrice[i][j]== matrice[i+1][j+1] && matrice[i+1][j+1]== matrice[i+2][j+2] && matrice[i+2][j+2]== matrice[i+3][j+3])
                {
                    gameOver = 1;
                    document.getElementById("vincitore").innerText = " vince il " + matrice[i][j];
                }
            }
        }
    }

    //d2
    for(i=3;i<nRighe;i++)
    {
        for(j=0;j<nColonne-3;j++)
        {
            if(matrice[i][j]!=' ')
            {
                if(matrice[i][j]== matrice[i-1][j+1] && matrice[i-1][j+1]== matrice[i-2][j+2] && matrice[i-2][j+2]== matrice[i-3][j+3])
                {
                    gameOver = 1;
                    document.getElementById("vincitore").innerText = " vince il " + matrice[i][j];
                }
            }
        }
    }
}