import { FC, useState } from "react"
import { Button, DatePicker, Form, Input, Select } from "antd"
import { DownOutlined } from "@ant-design/icons"
import { ECountry, countries, russianCities, usaCities } from "./constants"

import "./App.css"

const { Option } = Select

interface IFormValue {
  name: string
  surname: string
  middlename: string
  birthday: moment.Moment
  country: string
  city: string
}

const App: FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<ECountry>()
  const [form] = Form.useForm<IFormValue>()

  const onFinish = (value: IFormValue) => {
    const info = {
      client: {
        name: value.name,
        surname: value.surname,
        middlename: value.middlename,
        birthday: value.birthday
          ? value.birthday.format("YYYY-MM-DD")
          : undefined,
      },
      place: {
        country: value.country,
        city: value.city,
      },
    }
    console.log(info)
  }

  return (
    <div className="App">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label="Фамилия"
          name="surname"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите фамилию!",
              type: "string",
            },
            {
              message: "Можно использовать только буквы",
              pattern: /^[a-zA-Zа-яА-Я]*$/,
            },
          ]}
        >
          <Input placeholder="Введите фамилию" className="input" />
        </Form.Item>

        <Form.Item
          label="Имя"
          name="name"
          rules={[
            {
              message: "Можно использовать только буквы",
              pattern: /^[a-zA-Zа-яА-Я]*$/,
            },
          ]}
        >
          <Input placeholder="Введите имя" className="input" />
        </Form.Item>

        <Form.Item
          label="Отчество"
          name="middlename"
          rules={[
            {
              message: "Можно использовать только буквы",
              pattern: /^[a-zA-Zа-яА-Я]*$/,
            },
          ]}
        >
          <Input placeholder="Введите отчетство" className="input" />
        </Form.Item>

        <Form.Item label="Дата рождения" name="birthday">
          <DatePicker className="input" placeholder="Введите дату" />
        </Form.Item>

        <Form.Item label="Выберите страну" name="country">
          <Select
            suffixIcon={
              <div>
                <DownOutlined />
              </div>
            }
            placeholder="Выберите страну"
            className="input"
            onChange={(value: ECountry) => {
              form.resetFields(["city"])
              setSelectedCountry(value)
            }}
          >
            {countries?.map((item) => (
              <Option key={item.id} value={item.value}>
                {item.value}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Выберите город" name="city">
          <Select
            suffixIcon={
              <div>
                <DownOutlined />
              </div>
            }
            placeholder="Выберите город"
            className="input"
          >
            {selectedCountry === ECountry.Russia &&
              russianCities?.map((item) => (
                <Option key={item.id} value={item.value}>
                  {item.value}
                </Option>
              ))}
            {selectedCountry === ECountry.USA &&
              usaCities?.map((item) => (
                <Option key={item.id} value={item.value}>
                  {item.value}
                </Option>
              ))}
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default App
