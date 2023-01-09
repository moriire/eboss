from product_images.models import ProductImages

@receiver(post_save, sender=ProductImages)
def signal_receiver(sender, instance, **kwargs):
        instance.product.img.add(instance.id)  

        