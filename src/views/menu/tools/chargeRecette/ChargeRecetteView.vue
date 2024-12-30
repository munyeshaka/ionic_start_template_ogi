<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button text="" defaultHref="/"></ion-back-button>
                </ion-buttons>
                <ion-title>Basic</ion-title>
                <ion-buttons slot="end">
                    <ion-button class="button-add" expand="block" @click="addBasic">+</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-grid>
                <ion-row>
                    <ion-col @click="moneyIn" size="4" size-md="4" size-lg="4">
                        Money in
                    </ion-col>
                    <ion-col @click="moneyOut" size="4" size-md="4" size-lg="4">
                        Money out
                    </ion-col>
                </ion-row>
            </ion-grid>
            <h4>History</h4>
            <ion-list>
                <div v-if="$store.state.works == 0">
                    <ion-item>Pas des donnees!!</ion-item>
                </div>
                <div v-else>
                    <div v-for="(work, index) in $store.state.works" :key="index">
                        <ion-item :routerLink="`/menu/tools/category_basic/basic/basicDetail/${work.id}`">
                            <ion-label>
                                <h2>{{ work.title }}</h2>
                                <span class="label_span">{{ work.created_at }}</span>
                            </ion-label>
                            <ion-label slot="end">
                                <h5 slot="end">{{ work.amount }}</h5>
                                <h6 class="red_ogi" v-if="work.type == 'MoneyOut'" slot="end">Out</h6>
                                <h6 class="green_ogi" v-else slot="end">In</h6>
                            </ion-label>
                        </ion-item>
                    </div>
                </div>
            </ion-list>
            <br>
        </ion-content>

    </ion-page>
</template>

<script>

// import OurMoneyOut from '@/components/basic/OurMoneyOut.vue';
// import OurMoneyIn from '@/components/basic/OurMoneyIn.vue';
// import OurModalBasicEdit from '@/components/basic/OurModalBasicEdit.vue';


export default {

    data() {
        return {
            // works: '',
            // searchWork: ''
            modal: false
        };
    },
    components: {
        // OurModalBasicAdd
    },
    methods: {
        addBasic() {
            this.$store.state.modal = true
        },
        getWork() {
            this.axios.get(this.$store.state.baseUrl + '/work/', this.getHeaders()
            ).then(response => {
                this.$store.state.works = response.data.results;
            })
                .catch(error => {
                    console.log(error)
                })
        },
        // searchWorkInArray(searchWork) {
        //     this.works = this.$store.state.works.filter(
        //         e => JSON.stringify(e)
        //             .toLowerCase()
        //             .includes(searchWork.toLowerCase())
        //     )
        // }
    },
    // watch: {
    //     searchWork(newVal) {
    //         return this.searchWorkInArray(newVal);
    //     }
    // },
    mounted() {
        this.getWork();
    }
};
</script>

<style>
.circle-container {
    display: flex;
    justify-content: space-between;
    width: 300px;
    height: 150px;
}

.money-in-circle,
.money-out-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #d5a93f;
}

.money-in-circle i,
.money-out-circle i {
    font-size: 40px;
    color: #fff;
}
</style>