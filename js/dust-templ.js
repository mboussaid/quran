(function(){dust.register("surat",body_0);function body_0(chk,ctx){return chk.section(ctx.get("verses"),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.reference(ctx.get("ar"),ctx,"h").write("<span class=\"ayahNumber\"> ﴿").reference(ctx.get("verse"),ctx,"h").write("﴾ </span>");}return body_0;})();(function(){dust.register("chapters",body_0);function body_0(chk,ctx){return chk.section(ctx.get("chapters"),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.write("<li><a href='#offquran?surah=").reference(ctx.get("id"),ctx,"h").write("'><img class='ui-li-icon' src='img/quran.png' width=16 height=16 alt='").reference(ctx.get("enname"),ctx,"h").write("'/>").reference(ctx.get("enname"),ctx,"h").write(" <span class='arabic right' style='background: transparent;'>").reference(ctx.get("arname"),ctx,"h").write("</span></a></li>");}return body_0;})();
