let x=0, y=0;
let n1 = 0, n2 = 0, n3 = 0, n4 = 0, n5 = 0;
let m1 = 0, m2 = 0, m3 = 0, m4 = 0, m5 = 0;

        function more(){
            if(x == 0){
                document.getElementById("fas").className = "fas fa-compress-arrows-alt";

                document.getElementById("down1").className = "fa fa-angle-down";
                document.getElementById("down2").className = "fa fa-angle-down";
                document.getElementById("down3").className = "fa fa-angle-down";
                document.getElementById("down4").className = "fa fa-angle-down";
                document.getElementById("down5").className = "fa fa-angle-down";

                document.getElementById("ga1").style.display = "block";
                document.getElementById("ga2").style.display = "block";
                document.getElementById("ga3").style.display = "block";
                document.getElementById("ga4").style.display = "block";
                document.getElementById("ga5").style.display = "block";
                x++;
            } else {
                document.getElementById("fas").className = "fas fa-expand-arrows-alt";

                document.getElementById("down1").className = "fa fa-angle-right";
                document.getElementById("down2").className = "fa fa-angle-right";
                document.getElementById("down3").className = "fa fa-angle-right";
                document.getElementById("down4").className = "fa fa-angle-right";
                document.getElementById("down5").className = "fa fa-angle-right";

                document.getElementById("ga1").style.display = "none";
                document.getElementById("ga2").style.display = "none";
                document.getElementById("ga3").style.display = "none";
                document.getElementById("ga4").style.display = "none";
                document.getElementById("ga5").style.display = "none";
                x=0;
            }
        }

        function down1(){
            if (n1 == 0) {
                document.getElementById("down1").className = "fa fa-angle-down";
                document.getElementById("ga1").style.display = "block";
                n1++;
            } else {
                document.getElementById("down1").className = "fa fa-angle-right";
                document.getElementById("ga1").style.display = "none";
                n1=0;
            }
        }
        
        function down2(){
            if (n2 == 0) {
                document.getElementById("down2").className = "fa fa-angle-down";
                document.getElementById("ga2").style.display = "block";
                n2++;
            } else {
                document.getElementById("down2").className = "fa fa-angle-right";
                document.getElementById("ga2").style.display = "none";
                n2=0;
            }
        }

        function down3(){
            if (n3 == 0) {
                document.getElementById("down3").className = "fa fa-angle-down";
                document.getElementById("ga3").style.display = "block";
                n3++;
            } else {
                document.getElementById("down3").className = "fa fa-angle-right";
                document.getElementById("ga3").style.display = "none";
                n3=0;
            }
        }

        function down4(){
            if (n4 == 0) {
                document.getElementById("down4").className = "fa fa-angle-down";
                document.getElementById("ga4").style.display = "block";
                n4++;
            } else {
                document.getElementById("down4").className = "fa fa-angle-right";
                document.getElementById("ga4").style.display = "none";
                n4=0;
            }
        }

        function down5(){
            if (n5 == 0) {
                document.getElementById("down5").className = "fa fa-angle-down";
                document.getElementById("ga5").style.display = "block";
                n5++;
            } else {
                document.getElementById("down5").className = "fa fa-angle-right";
                document.getElementById("ga5").style.display = "none";
                n5=0;
            }
        }



        function more2(){
            if(y == 0){
                document.getElementById("fas").className = "fas fa-compress-arrows-alt";

                document.getElementById("down6").className = "fa fa-angle-down";
                document.getElementById("down7").className = "fa fa-angle-down";
                document.getElementById("down8").className = "fa fa-angle-down";
                document.getElementById("down9").className = "fa fa-angle-down";
                document.getElementById("down10").className = "fa fa-angle-down";

                document.getElementById("ua1").style.display = "block";
                document.getElementById("ua2").style.display = "block";
                document.getElementById("ua3").style.display = "block";
                document.getElementById("ua4").style.display = "block";
                document.getElementById("ua5").style.display = "block";
                y++;
            } else {
                document.getElementById("fas").className = "fas fa-expand-arrows-alt";

                document.getElementById("down6").className = "fa fa-angle-right";
                document.getElementById("down7").className = "fa fa-angle-right";
                document.getElementById("down8").className = "fa fa-angle-right";
                document.getElementById("down9").className = "fa fa-angle-right";
                document.getElementById("down10").className = "fa fa-angle-right";

                document.getElementById("ua1").style.display = "none";
                document.getElementById("ua2").style.display = "none";
                document.getElementById("ua3").style.display = "none";
                document.getElementById("ua4").style.display = "none";
                document.getElementById("ua5").style.display = "none";
                y=0;
            }
        }

        function down6(){
            if (n1 == 0) {
                document.getElementById("down6").className = "fa fa-angle-down";
                document.getElementById("ua1").style.display = "block";
                n1++;
            } else {
                document.getElementById("down6").className = "fa fa-angle-right";
                document.getElementById("ua1").style.display = "none";
                n1=0;
            }
        }
        
        function down7(){
            if (n2 == 0) {
                document.getElementById("down7").className = "fa fa-angle-down";
                document.getElementById("ua2").style.display = "block";
                n2++;
            } else {
                document.getElementById("down7").className = "fa fa-angle-right";
                document.getElementById("ua2").style.display = "none";
                n2=0;
            }
        }

        function down8(){
            if (n3 == 0) {
                document.getElementById("down8").className = "fa fa-angle-down";
                document.getElementById("ua3").style.display = "block";
                n3++;
            } else {
                document.getElementById("down8").className = "fa fa-angle-right";
                document.getElementById("ua3").style.display = "none";
                n3=0;
            }
        }

        function down9(){
            if (n4 == 0) {
                document.getElementById("down9").className = "fa fa-angle-down";
                document.getElementById("ua4").style.display = "block";
                n4++;
            } else {
                document.getElementById("down9").className = "fa fa-angle-right";
                document.getElementById("ua4").style.display = "none";
                n4=0;
            }
        }

        function down10(){
            if (n5 == 0) {
                document.getElementById("down10").className = "fa fa-angle-down";
                document.getElementById("ua5").style.display = "block";
                n5++;
            } else {
                document.getElementById("down10").className = "fa fa-angle-right";
                document.getElementById("ua5").style.display = "none";
                n5=0;
            }
        }