import React, {Component} from 'react';
import classes from './ContactData.module.scss';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zipCode: ''
        },
        loading: false
    }

    orderhandler = (event) => {
        event.preventDefault();
        this.setState({loading: true})
        const order = {
        ingredients: this.props.ingredients,
            totalPrice: this.props.totalPrice,
            customer: {
                address: {
                street: '101 Nam Cao',
                zipCode: '70000',
                country: 'Viet Nam'
                },
                name: 'Hoang Tien',
                email: 'Hoangtjent9@gmail.com'
            },
            deliveryMethod: 'Faster'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false})
                this.props.history.push('/')
            })
            .catch(error => this.setState({loading: false}))
        
    }

    render() {
        let form = (
            <form>
                <input type='text' name='name' placeholder='Your name'/>
                <input type='email' name='email' placeholder='Your email'/>
                <input type='email' name='street' placeholder='Your street'/>
                <input type='email' name='zip code' placeholder='Your zip code'/>
                <Button btnType='Success' clicked={this.orderhandler}>Order</Button>
            </form>
        )

        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <p>Your contact</p>
                {form}
            </div>
        )
    }
}

export default ContactData;