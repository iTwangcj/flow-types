# Flow types for ppm

Flow definitions for ppm plugins and internal code.


## Usage

To set up the types we need to add them to the `.flowconfig` flow configuration file.

```
[libs]
node_modules/@ppm/types/lib/

[options]
suppress_comment= \\(.\\|\n\\)*\\$FlowFixMe
```

### Imports

```
import type {ILocalData, LocalStorage, Logger, Config} from '@ppm/types';

 class LocalData implements ILocalData {

  path: string;
  logger: Logger;
  data: LocalStorage;
  config: Config;
  locked: boolean;
  ...  
}
```


