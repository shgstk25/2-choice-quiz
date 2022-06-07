import { VFC } from "react";
import { useParams } from "react-router";
import Edit from "../../components/pages/Edit"

const EnhancedEdit: VFC = () => {
    const { id = "" } = useParams();

    return (<Edit id={id} />)
}

export default EnhancedEdit;
