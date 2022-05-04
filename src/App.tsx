import { VFC } from "react";
import { Route, Routes } from "react-router";

import Top from './components/pages/Top';
import List from './containers/pages/List';
import NotFound from './components/pages/404';

const App: VFC = () => (
    <Routes>
        <Route path="/" element={<Top />} />
        <Route path="list" element={<List />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
)

export default App;
