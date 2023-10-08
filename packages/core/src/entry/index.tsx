import './public-path';
import 'core-js';
import 'regenerator-runtime/runtime';

import React from 'react';
import {createRoot} from 'react-dom/client';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

import './index.scss';

dayjs.locale('zh-cn');

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(<div />);

