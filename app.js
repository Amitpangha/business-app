// Simple connection to Supabase
const SUPABASE_URL = 'YOUR_SUPABASE_URL_HERE';
const SUPABASE_KEY = 'YOUR_SUPABASE_KEY_HERE';

// Get these from Supabase:
// 1. Go to Supabase project
// 2. Click Settings (gear icon)
// 3. Click API
// 4. Copy: URL and anon public key

async function saveBillToDatabase(customerName, amount) {
    const billData = {
        customer_name: customerName,
        amount: parseFloat(amount),
        user_id: 'temp-user-id' // We'll fix this later
    };
    
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/bills`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`
            },
            body: JSON.stringify(billData)
        });
        
        if(response.ok) {
            console.log('Bill saved to database!');
            return true;
        }
    } catch(error) {
        console.error('Error saving bill:', error);
    }
    return false;
}

// Test function
async function testConnection() {
    console.log('Testing database connection...');
    // We'll complete this later
}