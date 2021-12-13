<template>
    <red-background v-if="!isAuth || ($router.currentRoute.value.name === 'JoinMeeting' || $router.currentRoute.value.name === 'HostMeeting')" />
    <white-background v-else />
</template>
<script>
import RedBackground from './components/RedBackground.vue';
import WhiteBackground from './components/WhiteBackground.vue';

import {mapGetters} from 'vuex'

export default {
    components: {
        RedBackground,
        WhiteBackground,
    },
    computed: {
        ...mapGetters({
          isAuth: 'auth/isAuth'
        })
    }
}
</script>
<style>
* {
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
	font-family: 'Poppins', sans-serif }
:root {
	--form-control-color: #32BA7C }
::-webkit-scrollbar {
	width: 5px;
	margin-left: 10px }
::-webkit-scrollbar-thumb{
	background-color: #C4C4C4;
	border-radius: 20px }

@supports (-webkit-appearance: none) or (-moz-appearance: none) {
	input[type=checkbox],
	input[type=radio] {
		--active: #32BA7C;
		--active-inner: #fff;
		--background: #fff;
		--disabled: #F6F8FF;
		--disabled-inner: #E1E6F9;
		-webkit-appearance: none;
		-moz-appearance: none;
		height: 10px;
		outline: none;
		display: inline-block;
		vertical-align: top;
		position: relative;
		margin: 0;
		cursor: pointer;
		background: var(--b, var(--background));
	}
	input[type=checkbox] {
		border: 1px solid #E9E9E9;
	}
	input[type=radio] {
		border: 1px solid #9B9999;
	}
	input[type=checkbox]:after,
	input[type=radio]:after {
		content: "";
		display: block;
		left: 0;
		top: 0;
		position: absolute;
		transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s);
	}
	input[type=checkbox]:checked,
	input[type=radio]:checked {
		--b: var(--active);
		--bc: var(--active);
		--d-o: .3s;
		--d-t: .6s;
		--d-t-e: cubic-bezier(.2, .85, .32, 1.2);
	}
	input[type=checkbox]:disabled,
	input[type=radio]:disabled {
		--b: var(--disabled);
		cursor: not-allowed;
		opacity: 0.9;
	}
	input[type=checkbox]:disabled:checked,
	input[type=radio]:disabled:checked {
		--b: var(--disabled-inner);
		--bc: var(--border);
	}
	input[type=checkbox]:disabled + label,
	input[type=radio]:disabled + label {
		cursor: not-allowed;
	}
	input[type=checkbox]:not(.switch),
	input[type=radio]:not(.switch) {
		width: 10px;
	}
	input[type=checkbox]:not(.switch):after,
	input[type=radio]:not(.switch):after {
		opacity: var(--o, 0);
	}
	input[type=checkbox]:not(.switch):checked,
	input[type=radio]:not(.switch):checked {
		--o: 1;
	}
	input[type=checkbox]:not(.switch):after {
		width: 4px;
		height: 7px;
		border: 2px solid var(--active-inner);
		border-top: 0;
		border-left: 0;
		left: 25%;
		top: 1.25%;
		transform: rotate(var(--r, 20deg));
	}
	input[type=checkbox]:not(.switch):checked {
		--r: 43deg;
	}
	input[type=checkbox].switch {
		width: 38px;
	}
	input[type=checkbox].switch:after {
		left: 2px;
		top: 2px;
		border-radius: 50%;
		width: 10px;
		height: 10px;
		background: var(--ab, var(--border));
		transform: translateX(var(--x, 0));
	}
	input[type=checkbox].switch:checked {
		--ab: var(--active-inner);
		--x: 17px;
	}
	input[type=checkbox].switch:disabled:not(:checked):after {
		opacity: 0.6;
	}

	input[type=radio] {
		border-radius: 50%;
	}
	input[type=radio]:checked {
		--s: .5;
	}
}
select {
	outline: none;
	appearance: none;
	border: none;
	margin: 0;
	width: 100%;
}
.custom-select {
	width: 100%;
	border-radius: 5px;
	border: 1px solid #CECECE;
	padding: 5px 10px;
	cursor: pointer;
	font-size: 10px;
	line-height: 15px;
}
.custom-select::after {
  content: "";
  width: 0.8em;
  height: 0.5em;
  background-color: #CECECE;
  clip-path: polygon(50% 100%, 0 0%, 100% 0);
}

.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active,
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition: all .625s ease .5s;
}
.slide-up-enter-from,
.slide-up-leave-to {
    opacity: 0;
    transform: translateY(10%);
}
.slide-down-enter-from,
.slide-down-leave-to {
    opacity: 0;
    transform: translateY(-10%);
}
.slide-left-enter-from,
.slide-left-leave-to {
    opacity: 0;
    transform: translateX(-10%);
}
.slide-right-enter-from,
.slide-right-leave-to {
    opacity: 0;
    transform: translateX(10%);
}

.kanit {
  font-family: 'Kanit', sans-serif }
.overlay-bg {
	background-color: rgba(66, 66, 66, .8);
}

.red-input {
  min-width: 252px;
  padding: 8px 16px;
}
.join-btn {
	width: 37vw;
	min-width: 274px;
}
@media screen and (min-width: 1024px){
	.red-input {
		min-width: 315px;
		padding: 9px 17px;
	}
	.join-btn {
		width: 35vw;
	}
}
@media screen and (min-width: 1280px){
	.red-input {
		min-width: 378px;
		padding: 10px 18px;
	}
	.join-btn {
		width: 30vw;
	}
}
@media screen and (min-width: 1536px){
	.red-input {
		min-width: 441px;
		padding: 11px 19px;
	}
	.join-btn {
		width: 25vw;
	}
}
</style>
