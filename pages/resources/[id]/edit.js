import Layout from "components/Layout";
import ResourceForm from "components/ResourceForm";
import axios from "axios";

const ResourceEdit = ({ resource }) => {
    const updateResource = (formData) => {
        axios
            .patch("/api/resources", formData)
            .then((_) => alert("data updated"))
            // .then((_) => (window.location.href = "/"))
            .catch((err) => alert(err?.response?.data));
    };
    return (
        <Layout>
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <ResourceForm
                            initialData={resource}
                            onFormSubmit={updateResource}
                        ></ResourceForm>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export async function getServerSideProps({ params }) {
    const dataRes = await fetch(
        `http://localhost:3001/api/resources/${params.id}`
    );
    const data = await dataRes.json();

    return {
        props: {
            resource: data,
        },
    };
}
export default ResourceEdit;
