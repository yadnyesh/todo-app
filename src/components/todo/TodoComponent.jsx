import React, {Component} from 'react'
import moment from 'moment'
import { Formik, Form, Field } from 'formik'

class TodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description : 'Learn Forms',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.values = this.values.bind(this)

    }

    validate(values) {
        let errors = {}
        console.log(values)
        return errors

    }

    onSubmit(values){
        console.log(values)
    }

    render() {

        let {description, targetDate} = this.state

        return(
        <div>
            <h1>TODO</h1>
            <div className="container">
                <Formik 
                    initialValues={{description,targetDate}}
                    onSubmit={this.onSubmit}
                    validate={this.validate}
                >
                    {
                        (props) => (
                            <Form>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"></Field>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date" name="targetDate"></Field>
                                </fieldset>  
                                <button className="btn btn-success" type="submit">Save</button>        
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
        )
    }
}

export default TodoComponent