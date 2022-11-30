<script setup>
defineProps(['title','mass','optional',])
</script>

<template>
  <div class="looks">
            <h1 class="Top">Waga {{title}}</h1>
            <div class="Data">
                <div class="Recent">
                    <p class="Top">
                        Masa
                    </p>
                    <p class="Bottom homer" style="font-size: 1.75vw;" id="measurement2">
                        {{mass}}
                    </p>
                    <div class="Top">
                        <img src="/stability.png" style="width:1.4vw; height:auto; margin-left: auto; margin-right: auto;"/>
                        <img src="/zero.png" style="width:1.4vw; height:auto; margin-left: auto; margin-right: auto;"/>
                        <img src="/weight.png" style="width:1.4vw; height:auto; margin-left: auto; margin-right: auto;"/>
                    </div>
                    <div class="Bottom-Wyk">
                        <p class="Bottom homer" style="border-right: 1px solid #0b4949;">{{optional[0]}}</p>
                        <p class="Bottom homer" style="border-left: 1px solid #0b4949; border-right: 1px solid #0b4949">{{optional[1]}}</p>
                        <p class="Bottom homer" style="border-left: 1px solid #0b4949;">{{optional[2]}}</p>
                    </div>
                </div>
                <h3>Poprzednie Miary</h3>
                <div class="Prev">
                    <p class="Top" style="width: 100%; border-bottom: 2px solid #0b4949;">Masa</p>
                    <p class="Top" style="width: 100%; border-bottom: 2px solid #0b4949;">Tara</p>
                    <p class="Top" style="width: 100%; border-bottom: 2px solid #0b4949;">Czas</p>
                    <p class="Bottom" style="border-top: 0" id="PreviousMasa-2-1">21kg</p>
                    <p class="Bottom" style="border-top: 0">20g</p>
                    <p class="Bottom" style="border-top: 0">12:23</p>
                    <p class="Bottom" style="border-top: 0" id="PreviousMasa-2-2">3kg</p>
                    <p class="Bottom" style="border-top: 0">1g</p>
                    <p class="Bottom" style="border-top: 0">12:23</p>
                    <p class="Bottom" style="border-top: 0" id="PreviousMasa-2-3">17kg</p>
                    <p class="Bottom" style="border-top: 0">20g</p>
                    <p class="Bottom" style="border-top: 0">12:23</p>
                </div>
            </div>
        </div>
</template>
</script>