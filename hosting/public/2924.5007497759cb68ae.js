"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2924],{2924:(_,u,n)=>{n.r(u),n.d(u,{PreferencesWeb:()=>p});var r=n(467),c=n(5083);class p extends c.E_{constructor(){super(...arguments),this.group="CapacitorStorage"}configure({group:e}){var t=this;return(0,r.A)(function*(){"string"==typeof e&&(t.group=e)})()}get(e){var t=this;return(0,r.A)(function*(){return{value:t.impl.getItem(t.applyPrefix(e.key))}})()}set(e){var t=this;return(0,r.A)(function*(){t.impl.setItem(t.applyPrefix(e.key),e.value)})()}remove(e){var t=this;return(0,r.A)(function*(){t.impl.removeItem(t.applyPrefix(e.key))})()}keys(){var e=this;return(0,r.A)(function*(){return{keys:e.rawKeys().map(s=>s.substring(e.prefix.length))}})()}clear(){var e=this;return(0,r.A)(function*(){for(const t of e.rawKeys())e.impl.removeItem(t)})()}migrate(){var e=this;return(0,r.A)(function*(){var t;const s=[],i=[],f=Object.keys(e.impl).filter(o=>0===o.indexOf("_cap_"));for(const o of f){const a=o.substring(5),m=null!==(t=e.impl.getItem(o))&&void 0!==t?t:"",{value:h}=yield e.get({key:a});"string"==typeof h?i.push(a):(yield e.set({key:a,value:m}),s.push(a))}return{migrated:s,existing:i}})()}removeOld(){var e=this;return(0,r.A)(function*(){const s=Object.keys(e.impl).filter(i=>0===i.indexOf("_cap_"));for(const i of s)e.impl.removeItem(i)})()}get impl(){return window.localStorage}get prefix(){return"NativeStorage"===this.group?"":`${this.group}.`}rawKeys(){return Object.keys(this.impl).filter(e=>0===e.indexOf(this.prefix))}applyPrefix(e){return this.prefix+e}}}}]);