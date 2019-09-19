# d365-common
|Build|NPM|Semantic-Release|
|-----|---|----------------|
|[![Build Status](https://derekfinlinson.visualstudio.com/GitHub/_apis/build/status/derekfinlinson.d365-common)](https://derekfinlinson.visualstudio.com/GitHub/_build/latest?definitionId=2)|[![npm](https://img.shields.io/npm/v/d365-common.svg?style=flat-square)](https://www.npmjs.com/package/d365-common)|[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)|

A Dynamics 365 module including common functions used in JavaScript web resource development.

### Installation

##### Node

```
npm install --save-dev d365-common
```
### Usage

Import the module into your TypeScript/JavaScript files

```typescript
import { setFieldRequirementLevel } from 'd365-common';

setFieldRequirementLevel('accountnumber', 'required');
```

For Dynamics versions less than 9.0

```typescript
import { setFieldRequirementLevel } from 'd365-common\dist\v8\index';

setFieldRequirementLevel('accountnumber', 'required');
```