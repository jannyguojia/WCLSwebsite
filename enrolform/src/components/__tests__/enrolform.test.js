// EnrolForm.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnrolForm from './enrolform'; // 请根据实际文件路径调整
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

describe('EnrolForm', () => {
    test('renders EnrolForm component', () => {
        render(<EnrolForm />);

        // 根据实际组件内容编写断言，这里以一个表单标题为例
        expect(screen.getByText('Class Detail.')).toBeInTheDocument();
    });

    test('submits form when button is clicked', async () => {
        render(<EnrolForm />);

        // 模拟用户输入，这里以输入 Email 为例
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });

        // 断言是否输入生效
        expect(screen.getByLabelText('Email')).toHaveValue('test@example.com');

        // 模拟提交按钮点击
        fireEvent.click(screen.getByText('Submit'));

        // 在实际场景中，你可能需要等待异步操作完成
        // 在这个简单例子中，我们可以使用 setTimeout 模拟异步操作的完成
        // 在实际项目中，请确保使用适当的异步等待方式
        await new Promise(resolve => setTimeout(resolve, 0));

        // 在提交后的期望状态进行断言，例如跳转或显示成功消息
        expect(window.location.href).toBe('https://wcls-website.web.app/');
    });
});
