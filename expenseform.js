import React, { useState } from 'react';
    import axios from 'axios';
    
    const ExpenseForm = () => {
        const [amount, setAmount] = useState('');
        const [category, setCategory] = useState('');
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            const token = localStorage.getItem('token');
            await axios.post('/api/expenses', { amount, category }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            // Reset form or update state
        };
    
        return (
            <form onSubmit={handleSubmit}>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
                <button type="submit">Add Expense</button>
            </form>
        );
    };
    
    export default ExpenseForm;