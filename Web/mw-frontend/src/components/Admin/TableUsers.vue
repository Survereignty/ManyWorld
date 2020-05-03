<template>
    <section>
        <table>
            <thead>
                <tr>
                    <td>{{$t('login.login')}}   </td>
                    <td class="t4">{{$t('login.email')}}   </td>
                    <td class="t3">{{$t('login.role')}}    </td>
                    <td class="t2">{{$t('login.creator')}} </td>
                    <td class="t1">{{$t('login.date')}}    </td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in USERS" :key="item.id">
                    <td>{{item.login}}              </td>
                    <td class="t4">{{item.email    | email}}   </td>
                    <td class="t3">{{item.role     | role($t('role.1'), $t('role.2'), $t('role.3'))}}    </td>
                    <td class="t2">{{item.Creator}}            </td>
                    <td class="t1">{{item.date     | date}}    </td>
                    <td @click="SelectUser(item)" class="icons">
                        <svg fill="gold" width="25" height="25" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M55.736 13.636l-4.368-4.362a2.308 2.308 0 00-1.636-.677c-.592 0-1.184.225-1.635.676l-3.494 3.484 7.639 7.626 3.494-3.483a2.305 2.305 0 000-3.264zM21.922 35.396l7.64 7.627 21.045-21.006-7.64-7.627zM20.273 37.028l-1.631 9.252 9.271-1.626z"/><path d="M41.393 50.403H12.587V21.597h20.329l5.01-5H10.82a3.243 3.243 0 00-3.234 3.234V52.17a3.243 3.243 0 003.234 3.234h32.339a3.243 3.243 0 003.234-3.234V29.049l-5 4.991v16.363z"/></svg>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
    export default {
        name: "AllUsers",
        created() {
            this.GetUsers();
        },
        methods: {
            GetUsers() {
                this.$store.dispatch('GET_USERS')
            },
            SelectUser(item) {
                this.$store.commit('SET_SELECT_USER', item);
                this.$store.commit('CHANGE_EDIT_USER', true);
            },
        },
        computed: {
            USERS() {
                return this.$store.state.admin.USERS
            },
        },
        filters: {
            email(email) {
                if (email === 'NON') return "";
                return email;
            },
            date(date) {
                const options = {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                    hour:'numeric',
                    minute: 'numeric'
                }
                return new Date(date).toLocaleString('ru', options)
            },
            role(role, a, c, g) {
                if (role === '1') return a
                if (role === '2') return c
                if (role === '3') return g
                return "none"
            }
        }
    }
</script>