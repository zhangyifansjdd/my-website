module.exports = async (ctx, next) => {
  await next();
  if (ctx.status === 404) {
    console.log('history:',ctx.url);
    if (ctx.url.startsWith('/v3') > -1) {
      ctx.status = 200;
      await ctx.render('../../dist-vue3/index.html');
    } else if (ctx.url.startsWith('/') > -1) {
      ctx.status = 200;
      await ctx.render('../../dist/index.html');
    }
  }
};
