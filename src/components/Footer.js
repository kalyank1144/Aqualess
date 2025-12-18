export default function Footer() {
    return (
        <footer style={{
            padding: '40px 5%',
            borderTop: '1px solid var(--glass-border)',
            textAlign: 'center',
            color: 'var(--text-secondary)'
        }}>
            <p>&copy; {new Date().getFullYear()} AQUALESS. All rights reserved.</p>
        </footer>
    );
}
