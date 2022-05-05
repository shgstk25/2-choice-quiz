import { VFC } from "react";
import { Route, Routes } from "react-router";

import Top from './components/pages/Top';
import List from './containers/pages/List';
import Register from './containers/templates/Register';
import Change from './containers/templates/Change';
import NotFound from './components/pages/404';

const App: VFC = () => (
    <Routes>
        <Route path="/" element={<Top />} />
        <Route path="list" element={<List />} />
        <Route path="register" element={<Register />} />
        <Route path="change">
            <Route path="" element={<NotFound />} />
            <Route path=":id" element={<Change />} />
        </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
)

export default App;
