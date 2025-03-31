function(properties, context) {
  return window.bubbleMastraAgent.say(properties.input).then(response => {
    return { message: response };
  });
}

