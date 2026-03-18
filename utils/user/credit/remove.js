export default async function removeCredit() {
    const res = await fetch('/api/user/credit/remove', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    });

    const r = await res.json();
    return r.success
}