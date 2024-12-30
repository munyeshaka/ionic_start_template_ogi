<template>
    <router-view />
    <div class="tab-footer">
        <ion-footer>
            <ion-toolbar>
                <div class="tabs">
                    <router-link to="/menu/home" class="tab-link">
                        <i class="fas fa-home"></i>
                        <span>Home</span>
                    </router-link>
                    <router-link to="/menu/tools" class="tab-link">
                        <i class="fas fa-tools"></i>
                        <span>Tools</span>
                    </router-link>
                    <router-link to="/menu/settings" class="tab-link">
                        <i class="fas fa-gear"></i>
                        <span>Settings</span>
                    </router-link>
                </div>
            </ion-toolbar>
        </ion-footer>
    </div>
</template>


<script>
import { IonFooter, IonToolbar } from '@ionic/vue';


export default {
    name: "OurMenu",
    props: ['activeTab'],
    components: { IonFooter, IonToolbar },

    data() {
        return {
        };
    },

    methods: {
    }
};
</script>

<style>
.tab-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
}

.tabs {
    display: flex;
}

.tab-link {
    flex-grow: 1;
    text-align: center;
    text-decoration: none;
    color: var(--gray);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.tab-link i {
    font-size: 16px;
}

.tab-link span {
    font-size: 10px;
    margin: 2px;
}

.router-link-active {
    color: var(--primary) !important;
}
</style>