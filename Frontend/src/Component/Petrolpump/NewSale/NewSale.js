import React, { useState, useEffect } from 'react';
import './NewSale.css';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../../../actions/ProductActions';
import Nav from '../Navbar/Nav';
import ProductCard from '../ProductCard/ProductCard';
import SalesTable from './SalesTable';
import axios from 'axios';
import { toast } from 'react-toastify';
const NewSale = ({ match }) => {
  const [total, setTotal] = useState(0);
  const [list, setList] = useState([]);
  const [data, setData] = useState({
    name: '',
    quantity: 0,
  });
  const [price, setPrice] = useState(0);
  const [type, setType] = useState({});

  const handleSubmit = async () => {
    setList([
      ...list,
      {
        product: type?.name,
        amount: price,
        quantity: data.quantity,
        rate: type?.saleprice,
      },
    ]);
  };

  const handleBill = async (e) => {
    console.log('call');
    try {
      await axios.post(`${process.env.REACT_APP_API}/api/v2/purchase/sales`, {
        name: data.name,
        list: list,
        total: total,
      });
      toast.success('success');
      setTimeout(() => {
        window.location.reload();
      }, 200);
    } catch (error) {
      toast.error('error');
    }
  };

  const handleChange = (type) => (e) => {
    setData({ ...data, [type]: e.target.value });
  };
  const dispatch = useDispatch();

  const { products, error } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  useEffect(() => {
    dispatch(getProduct(keyword));
  }, [dispatch, keyword, error]);

  useEffect(() => {
    let temp = (type?.saleprice || 0) * (data.quantity || 0);
    setPrice(temp);
  }, [data.quantity, type]);

  useEffect(() => {
    let gt = list.reduce((initial, final) => {
      return initial + (parseInt(final?.amount) || 0);
    }, 0);
    setTotal(gt);
  }, [list]);

  const [paymentState, setPaymentState] = useState('');
  return (
    <div className="newSale">
      <Nav />
      <h1 className="newSale-pageTitle">New Sale</h1>
      <p className="selectProduct"> Select a product</p>
      <div className="newSale-products">
        <div className="products">
          {products &&
            products.map((product) => (
              <ProductCard
                type={type}
                key={product.id}
                product={product}
                setType={setType}
              />
            ))}
        </div>
      </div>
      <div className="newSale-details">
        <div className="newSale-detail">
          <div className="newSale-data newSale-data-Customer">
            <h1>Customer Name:</h1>{' '}
            <input onChange={handleChange('name')} value={data.name} />
          </div>
        </div>
        <div className="newSale-detail">
          <div className="newSale-data">
            <h1>Quantity in Ltr:</h1>{' '}
            <input
              onChange={handleChange('quantity')}
              value={data.quantity}
              type="number"
            />
          </div>
          <div className="newSale-data">
            <h1>Amount:</h1> <input placeholder={price} readOnly />
          </div>
          <div>
            <button
              onClick={() => {
                handleSubmit();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="newSale-table">
        <SalesTable list={list} />
        <div className="billBtn">
          <div>
            <h1>Payment Type:</h1>
            <div>
              <select
                className="custom-select"
                value={paymentState}
                onChange={(e) => {
                  const selectedPayment = e.target.value;
                  setPaymentState(selectedPayment);
                }}
              >
                <option value="">Select a payment opiton</option>
                <option value="Cash">Cash</option>
                <option value="Mobile Banking">Mobile Banking</option>
              </select>
            </div>
          </div>
          <div>
            <h1>Grand Total</h1>
            <input readOnly value={total} />
          </div>
          <button onClick={handleBill}>Generate Bill</button>
        </div>
      </div>
    </div>
  );
};

export default NewSale;
