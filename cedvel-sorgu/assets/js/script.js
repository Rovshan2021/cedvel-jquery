$(function(){


    $('#btn').click(function(){
        let ad = $('#ad').val();
        let soyad = $('#soyad').val();
        let sirket = $('#sirket').val();
        let maas = $('#maas').val();

        let tr = '<tr> <td>'+ ad +'</td> <td>'+ soyad +'</td> <td>'+ sirket +'</td> <td>'+ maas +'</td> </tr>';

        $('tbody').append(tr);

    })

});