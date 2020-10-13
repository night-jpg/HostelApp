const list = document.getElementById('guestTable');
tr = guestTable.getElementsByTagName('tr');
countS = 10;
countI = 1;
//showing the first 10 guests
if (tr.length > 11) {
    for (i = 11; i < tr.length; i++) {
        tr[i].style.display = 'none';
    }
}
//event to search a guest
const searchBar = document.getElementById('search');
searchBar.addEventListener('keyup', function (e) {
    const inp = e.target.value.toLowerCase();
    if (inp == '') {
        countS = 10;
        countI = 1;
        for (i = 1; i < countS; i++) {
            tr[i].style.display = '';
        }
        for (i = 11; i < tr.length; i++) {
            tr[i].style.display = 'none';
        }
    } else {
        for (i = 1; i < tr.length; i++) {
            first = tr[i].getElementsByTagName('td')[0];
            last = tr[i].getElementsByTagName('td')[1];
            firstValue = first.textContent || first.innerText;
            lastValue = last.textContent || last.innerText;

            if (firstValue.toLowerCase().indexOf(inp) != -1 || lastValue.toLowerCase().indexOf(inp) != -1) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    }

})

const bNext = document.getElementById('bN');
bNext.addEventListener('click', nextPage);
//next button funcion
function nextPage() {
    if (countS < tr.length) {
        for (i = countI; i <= countS; i++) {
            tr[i].style.display = 'none';
        }
        countS = countS + 10;
        countI = countI + 10;
        while (i <= countS && i < tr.length) {
            tr[i].style.display = '';
            i++;
        }

    }

}

const bPrevious = document.getElementById('bP');
bPrevious.addEventListener('click', previousPage);

//previous button function
function previousPage() {
    if (countI > 1) {
        // last page
        if (countS >= tr.length) {
            for (i = tr.length - 1; i >= countI; i--) {
                tr[i].style.display = 'none';
            }
        } else {
            for (i = countS; i >= countI; i--) {
                tr[i].style.display = 'none';
            }
        }
        countS = countS - 10;
        countI = countI - 10;
        for (j = countI; j <= countS; j++) {
            tr[j].style.display = '';
        }
    }
}

