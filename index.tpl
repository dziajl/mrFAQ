{register_js_file file="Module/Modulartext/Page/media/js/mrfaq.js"}

{random_value assign=rv}
{if $vars.text|@count}
    <div id="modulartext-wrapper-{$rv}" class="column-12 modulartext-wrapper {if $vars.text.expanded}expanded{/if}">
        <div class="number-wrapper">
            <h3 class="number"><span class="quantity">1</span>.</h3>
        </div>
        <div class="modular-content-wrapper">
            <a href="javascript:void(null);" class="collapse-toggler">        
                    <h3>{$vars.text.header|strip_tags}</h3>                
            </a>
            <div class="collapsed-text-content article-content" {if !$vars.text.expanded} style="display: none;"{/if}>
                {$vars.text.content}
            </div>
        </div>
    </div>

    {literal}
        <script type="text/javascript">
            (function ($) {
              
                var rv = '{/literal}{$rv}{literal}';
                $(function () {
                    $('#modulartext-wrapper-' + rv).modularText({
                        toggler: '.collapse-toggler',
                        content: '.collapsed-text-content',
                        module: '.modulartext-wrapper'                       
                    });
                });
            })(jQuery);
        </script>
    {/literal}
{/if}

