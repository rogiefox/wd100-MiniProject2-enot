import {Form, Button} from "react-bootstrap"

const SearchItems = () => {
    return (
        <>
            <div className="container mt-3">
                <Form className="d-flex justify-content-start align-items-start">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 w-25 bg-tertiary text-dark"
                    aria-label="Search"
                    />
                    <Button variant="outline-secondary text-dark">Search</Button>
                </Form>
            </div>
        </>
    )

}

export default SearchItems;
