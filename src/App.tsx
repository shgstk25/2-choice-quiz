import { VFC } from "react";
import { Route, Routes } from "react-router";

import Top from './components/pages/Top';
import Exam from './containers/pages/Exam';
import List from './containers/pages/List';
import Register from './components/pages/Register';
import Edit from './containers/pages/Edit';
import NotFound from './components/pages/404';

const App: VFC = () => (
    <Routes>
        <Route path="/" element={<Top />} />
        <Route path="exam" element={<Exam />} />
        <Route path="list" element={<List />} />
        <Route path="register" element={<Register />} />
        <Route path="edit">
            <Route path="" element={<NotFound />} />
            <Route path=":id" element={<Edit />} />
        </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
)

export default App;
