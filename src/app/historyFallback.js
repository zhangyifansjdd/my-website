module.exports = async (ctx, next) => {
  
  if (ctx.status === 404 && ctx.request.headers['accept'].includes('text/html')) {
    if (ctx.url.startsWith('/v3')) {
      ctx.status = 200;
      try {
        await ctx.render('/dist-vue3/index.html');
      } catch (e) {
        console.error(ctx.url,e);
      }
    } else if (ctx.url.startsWith('/')) {
      ctx.status = 200;
      try {
        await ctx.render('/dist/index.html');
      } catch (e) {
        console.error(ctx.url,e);
      }
    }
  }
  await next();
};
