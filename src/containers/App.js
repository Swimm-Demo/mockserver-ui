import React, {Component} from 'react';
import Form from "../components/Form";
import Grid from './Grid';
import {parse} from 'query-string';

export default class App extends Component {
    static host() {
        if (window.location.search && parse(window.location.search).host) {
            return parse(window.location.search).host;
        } else if (window.location.hostname) {
            return window.location.hostname;
        }
        return window.location.hostname;
    }

    static port() {
        if (window.location.search && parse(window.location.search).port) {
            return parse(window.location.search).port;
        } else if (window.location.port) {
            return window.location.port;
        } else if (window.location.protocol === "https:") {
            return 443;
        } else {
            return 80;
        }
    }

    render() {
        return (<div>
            {/*<RequestMatcher host={App.host()} port={App.port()}/>*/}
            <Form host={App.host()} port={App.port()}/>
            <Grid/>
        </div>)
    }
}
