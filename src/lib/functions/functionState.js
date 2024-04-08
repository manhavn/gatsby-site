export default function functionState() {
  return {
    $set(name, value, callback) {
      if (!name || name === "$set") return;
      const oldValue = this[name];
      const dataChange = { name, value, oldValue };
      switch (typeof value) {
        case "object":
          if (value && oldValue) {
            if (callback && value.length && value.length !== oldValue.length) {
              callback(dataChange);
            }
          } else if (value && !oldValue && callback) {
            callback(dataChange);
          }
          break;
        case "function":
          if (value && oldValue) {
            if (callback && value.name !== oldValue.name) callback(dataChange);
          } else if (value && !oldValue && callback) {
            callback(dataChange);
          }
          break;
        default:
          if (callback && oldValue !== value) callback(dataChange);
          break;
      }
      this[name] = value;
    },
  };
}
