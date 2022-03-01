import React from "react"
import Bar from "../Components/Bar"
import { Input, Label } from "reactstrap"

class Ticket extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState({ [name]: value })
        }
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "130px" }}>
                <div className="topic-headings">
                    REGISTER FOR THE SUMMIT
                </div>
                <Bar />
                <div style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", margin: "30px 0px 30px 0px", padding: "10px", width: "80%", borderRadius: "10px", alignSelf: "center" }}>
                    <Label style={{ color: "var(--blue-color)", fontWeight: "700" }}>Please choose the ticket category:</Label>
                    <Input onChange={onChange} value={this.state.category} name="category" type="select">
                        <option>--SELECT--</option>
                        <option value="presentation">PRESENTATION FEE</option>
                        <option value="conference">CONFERENCE PASS</option>
                    </Input>
                </div>
            </div>
        )
    }
}

export default Ticket
