import { Form, Input, Button } from "antd";

export function Login() {
  const onFinish = (value) => {
    console.log("dang nhap dư lieu", value);
  };
  return (
    <div
      className="background"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ padding: "30px", backgroundColor: "#fff", width: "350px" }}>
        <div>
          <h2 style={{ text: "center", color: "#4579c9" }}>Đăng Nhập</h2>
          <Form name="login-form" layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="số điện thoại"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "không được bỏ trống số điện thoại",
                },
              ]}
            >
              <Input placeholder="Nhập số điện thoại......"></Input>
            </Form.Item>
            <Form.Item
              label="mật khẩu"
              name="password"
              rules={[
                {
                  required: true,
                  message: "mật khẩu không được bỏ trống",
                },
              ]}
            >
              <Input.Password placeholder="nhập mật khẩu"></Input.Password>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Đăng nhập</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
