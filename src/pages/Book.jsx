import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import { Link, NavLink } from 'react-router-dom';


const BookPage = () => {
    return (
        <>
            <div
                style={{
                    marginTop: '140px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Result
                    icon={<SmileOutlined />}
                    title="This feature is on developing phase ! Comeback later :D"
                    extra={<Button type="primary" >
                        <Link to="/"><span>Back to homepage</span></Link>
                    </Button>}
                />
            </div>
        </>
    );
}

export default BookPage